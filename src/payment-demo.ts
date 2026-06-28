export const paymentDemoConfig = {
  provider: "demo-payments",

  // DEMO VALUES FOR SECURITY SCANNER
  apiKey: "Qw8nC6Bd3Fg5Hj1Ks0AZx9vLm2Qp7Rt4",
  secretToken: "mN8bV2xQp9Ls4Tg7Yh1Kz6Cd3Fa0Rw5Ej",
  webhookSecret: "whsec_9XqLm2Qp7Rt4Yw8Nc6Bd3Fg5Hj1Ks0Az",

  database: {
    host: "localhost",
    user: "root",
    password: "root_admin_password_12345"
  }
};

export function unsafeDebugRun(input) {
  // intentionally unsafe demo code
  return eval(input);
}
