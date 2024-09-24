Orientação de instalação da biblioteca e uma descrição detalhada de como usar as funcionalidades de validação e formatação de CPF e CNPJ.

# CPF e CNPJ Validator

Este projeto fornece uma implementação simples para validar e formatar CPF e CNPJ em tempo real enquanto o usuário digita. O código utiliza a biblioteca `lib-validator` para facilitar a validação e formatação.

3. **Instale a biblioteca `lib-validator`**:
   ```bash
   npm install lib-validator
   ```

4. **Importe a biblioteca em seu componente**.

## Uso

O componente `Home` é o ponto de entrada principal para a funcionalidade de validação. Aqui está um exemplo de como usá-lo:

```javascript
'use client';

import { handleCpfChange, handleCnpjChange } from 'lib-validator';
import { useState } from 'react';

export default function Home() {
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cpfMessage, setCpfMessage] = useState('');
  const [cnpjMessage, setCnpjMessage] = useState('');

  // Manipulador para o CPF
  const handleCpfInputChange = (e) => {
    const input = e.target.value;
    const { formatted, isValid, message } = handleCpfChange(input);
    setCpf(formatted);
    setCpfMessage(message);
  };

  // Manipulador para o CNPJ
  const handleCnpjInputChange = (e) => {
    const input = e.target.value;
    const { formatted, isValid, message } = handleCnpjChange(input);
    setCnpj(formatted);
    setCnpjMessage(message);
  };

  return (
    <div>
      <h1>{cpfMessage}</h1>
      <input 
        value={cpf} 
        onChange={handleCpfInputChange}
        placeholder='CPF'
      />
      <h1>{cnpjMessage}</h1>
      <input 
        value={cnpj} 
        onChange={handleCnpjInputChange}
        placeholder='CNPJ'
      />
    </div>
  );
}
```

### Descrição das Funções

- **handleCpfChange(input: string)**: Esta função formata e valida o CPF. Ela retorna um objeto contendo:
  - `formatted`: O CPF formatado.
  - `isValid`: Um booleano indicando se o CPF é válido.
  - `message`: Uma mensagem informando se o CPF é válido ou inválido.

- **handleCnpjChange(input: string)**: Semelhante à função `handleCpfChange`, esta função formata e valida o CNPJ, retornando um objeto com as mesmas propriedades.

### Validação e Formatação

As funções `validateCPF`, `validateCNPJ`, `formatCPF`, e `formatCNPJ` são responsáveis pela lógica de validação e formatação:

- **Validação**: Verifica se o CPF ou CNPJ tem o número correto de dígitos e se não é uma sequência repetitiva de números.
- **Formatação**: Aplica a formatação correta aos números, tornando-os legíveis (exemplo: 123.456.789-09 para CPF).

## Contribuição

Sinta-se à vontade para contribuir com melhorias e correções. Para sugestões de recursos ou relatórios de bugs, abra uma issue no repositório.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

## Referências

- [lib-validator no npm](https://www.npmjs.com/package/lib-validator)
```

### Melhorias Feitas:

1. **Instruções de Instalação**: Adicionei instruções para instalar a biblioteca diretamente do npm.
2. **Formatação e Clareza**: Melhorei a formatação e a clareza do texto, facilitando a leitura e a compreensão.
3. **Referência Adicional**: Incluí um link para a biblioteca no npm.

Sinta-se à vontade para fazer mais ajustes ou adições conforme necessário!
