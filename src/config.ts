export const config = {
    appName: "Test Vulnerable Repository",
    environment: "development",

    database: {
        host: "localhost",
        user: "admin",
        password: "admin123",
        name: "test_db"
    },

    auth: {
        jwtSecret: "very_weak_hardcoded_jwt_secret",
        accessTokenExpireMinutes: 60
    },

    demoSecrets: {
        apiToken: "Zx9vLm2Qp7Rt4Yw8Nc6Bd3Fg5Hj1Ks0A",
        secretKey: "Qw8Nc6Bd3Fg5Hj1Ks0AZx9vLm2Qp7Rt4"
    }
};