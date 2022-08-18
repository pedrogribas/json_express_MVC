# Prova
## Descrição
 - Criar endpoints para criação e consulta de turmas. 
 - As turmas deverão ser salvas em um arquivo json, **alunos.json.**
 - Este arquivo deverá ser criado e seus endpoints devem atuar considerando os registros que serão inseridos no arquivo.
 - Um registro de turma deve possuir os campos abaixo:
Id(int): identificador único, deve ser gerado automaticamente pela API e garantido que não se repita.
### Ex:
    Id: Int => 0
    Nome: String => "José"
    Turma:  String => "A"
    Turno: String => "Manhã"
    Curso: String => "Análise de Sistemas"
## Questões

- Crie um endpoint para criar um novo registro. Este endpoint deverá receber como parâmetros os campos, turma, turno, curso conforme descrito acima.
- Este registro deverá ser salvo no arquivo json turmas.json e deverá ter id único associado. A API deverá garantir o incremento automático deste identificador, de forma que ele não se repita entre os registros. 

- Crie um endpoint para consultar todos os registros feitos no arquivo turmas.json.

- Crie um endpoint para consultar apenas a listagem das turmas do arquivo turmas.json.
