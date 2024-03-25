import antlr4 from 'antlr4';
import ECMAScriptLexer from '../grammars/out/ECMAScriptLexer.js';
import ECMAScriptParser from '../grammars/out/ECMAScriptParser.js';
import ECMAScriptListener from '../grammars/out/ECMAScriptListener.js';

const input = `
const nar = 100;
`
const chars = new antlr4.InputStream(input);
const lexer = new ECMAScriptLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ECMAScriptParser(tokens);
globalThis.myParser = parser;
//const tree = parser.MyStartRule();