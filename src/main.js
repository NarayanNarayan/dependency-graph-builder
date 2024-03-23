var antlr4 = require('antlr4');
// import MyGrammarLexer from './MyGrammarLexer.js';
// import MyGrammarParser from './MyGrammarParser.js';
// import MyGrammarListener from './MyGrammarListener.js';

const input = "your text to parse here"
const chars = new antlr4.InputStream(input);
// const lexer = new MyGrammarLexer(chars);
// const tokens = new antlr4.CommonTokenStream(lexer);
// const parser = new MyGrammarParser(tokens);
// const tree = parser.MyStartRule();