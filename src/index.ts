// lib-validator.js

export const validateCPF = (cpf: string): boolean => {
  const cleanedCpf = cpf.replace(/[^\d]+/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (cleanedCpf.length !== 11) return false;

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cleanedCpf)) return false;

  // Cálculo do primeiro dígito verificador
  const digits = cleanedCpf.split('').map(Number);
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += digits[i] * (10 - i);
  }

  let firstVerifier = (sum * 10) % 11;
  if (firstVerifier === 10) firstVerifier = 0;

  // Cálculo do segundo dígito verificador
  sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += digits[i] * (11 - i);
  }

  let secondVerifier = (sum * 10) % 11;
  if (secondVerifier === 10) secondVerifier = 0;

  return digits[9] === firstVerifier && digits[10] === secondVerifier;
};

export const formatCPF = (cpf: string): string => {
  const cleanedCpf = cpf.replace(/[^\d]+/g, '');
  return cleanedCpf.replace(/(\d{3})(\d)/, '$1.$2')
                   .replace(/(\d{3})(\d)/, '$1.$2')
                   .replace(/(\d{3})(\d{2})$/, '$1-$2');
};

export const validateCNPJ = (cnpj: string): boolean => {
  const cleanedCnpj = cnpj.replace(/[^\d]+/g, '');

  // Verifica se o CNPJ tem 14 dígitos
  if (cleanedCnpj.length !== 14) return false;

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{13}$/.test(cleanedCnpj)) return false;

  // Cálculo do primeiro dígito verificador
  const digits = cleanedCnpj.split('').map(Number);
  const firstWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += digits[i] * firstWeights[i];
  }

  let firstVerifier = sum % 11;
  firstVerifier = firstVerifier < 2 ? 0 : 11 - firstVerifier;

  // Cálculo do segundo dígito verificador
  sum = 0;
  const secondWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  for (let i = 0; i < 13; i++) {
    sum += digits[i] * secondWeights[i];
  }

  let secondVerifier = sum % 11;
  secondVerifier = secondVerifier < 2 ? 0 : 11 - secondVerifier;

  return digits[12] === firstVerifier && digits[13] === secondVerifier;
};

export const formatCNPJ = (cnpj: string): string => {
  const cleanedCnpj = cnpj.replace(/[^\d]+/g, '');
  return cleanedCnpj.replace(/(\d{2})(\d)/, '$1.$2')
                     .replace(/(\d{3})(\d)/, '$1.$2')
                     .replace(/(\d{3})(\d)/, '$1/$2')
                     .replace(/(\d{4})(\d{2})$/, '$1-$2');
};

export const convertExternalNumber = (input: string | number): string => {
  return String(input).replace(/[^\d]+/g, '');
};

// Nova função para formatação e validação do CPF enquanto digita
export const handleCpfChange = (input: string): { formatted: string; isValid: boolean; message: string } => {
  const formattedCpf = formatCPF(input);
  const isValid = validateCPF(formattedCpf.replace(/[^\d]+/g, ''));
  const message = isValid ? `CPF Válido: ${formattedCpf}` : "CPF Inválido";

  return { formatted: formattedCpf, isValid, message };
};

// Nova função para formatação e validação do CNPJ enquanto digita
export const handleCnpjChange = (input: string): { formatted: string; isValid: boolean; message: string } => {
  const formattedCnpj = formatCNPJ(input);
  const isValid = validateCNPJ(formattedCnpj.replace(/[^\d]+/g, ''));
  const message = isValid ? `CNPJ Válido: ${formattedCnpj}` : "CNPJ Inválido";

  return { formatted: formattedCnpj, isValid, message };
};