import CryptoJS from "crypto-js";

export const getCredentials = (credentialType: string, secretKey: string): { username: string, password: string } => {
    try {
        let usernameKey;
        let passwordKey;

        if (credentialType.toUpperCase() === "MICROSOFT") {
            usernameKey = `${process.env.ENV.toUpperCase()}_MICROSOFT_USERNAME`;
            passwordKey = `${process.env.ENV.toUpperCase()}_MICROSOFT_PASSWORD`;
        } else if (credentialType.toUpperCase() === "MICROSOFT_DYNAMIC") {
            usernameKey = `${process.env.ENV.toUpperCase()}_MICROSOFT_DYNAMIC_USERNAME`;
            passwordKey = `${process.env.ENV.toUpperCase()}_MICROSOFT_DYNAMIC_PASSWORD`;
        } else {
            const prefix = `${process.env.ENV.toUpperCase()}_${credentialType.toUpperCase()}_`;
            usernameKey = `${prefix}USERNAME`;
            passwordKey = `${prefix}PASSWORD`;
        }

        const encryptedUsername = process.env[usernameKey] || '';
        const encryptedPassword = process.env[passwordKey] || '';

        const decryptedUsername = CryptoJS.AES.decrypt(encryptedUsername, secretKey).toString(CryptoJS.enc.Utf8);
        const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, secretKey).toString(CryptoJS.enc.Utf8);
        
        return { username: decryptedUsername, password: decryptedPassword };

    } catch (error) {
        console.error('Error fetching credentials:', error.message);
        return { username: '', password: '' };
    }
};