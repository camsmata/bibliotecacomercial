export type SeedUser = {
  email: string;
  password: string;
  nome: string;
  cargo: string;
  role: "master" | "comercial";
};

// Acessos iniciais da Central. As senhas devem ser trocadas no primeiro acesso.
export const SEED_USERS: SeedUser[] = [
  {
    email: "camila@microsistec.com.br",
    password: "Microsistec@2026",
    nome: "Camila",
    cargo: "Liderança Comercial",
    role: "master",
  },
  {
    email: "comercial@microsistec.com.br",
    password: "Comercial@2026",
    nome: "Time Comercial",
    cargo: "Comercial",
    role: "comercial",
  },
];
