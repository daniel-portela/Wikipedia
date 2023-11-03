const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=searchValue';

// list=search - executa uma pesquisa de texto completo
// srsearch="inputValue" - pesquisa por títulos de página ou conteúdo correspondente a esse valor.
// srlimit=20 Quantas páginas totais retornar.
// formato=json resposta json
// "origin=*" corrige erros de cors

const page_url = 'href=http://en.wikipedia.org/?curid=${pageid}';