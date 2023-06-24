// import { TextDocument, Position, CancellationToken, Range, ProviderResult, DefinitionProvider, TextEdit, LocationLink, Definition } from 'vscode'
// import { MojoLexer } from '../parser/MojoLexer';
// import { CharStreams, CommonTokenStream } from 'antlr4ts';
// import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
// import { MojoParser } from '../parser/MojoParser';
// import { DefinitionListener } from '../listeners/DefinitionListener';

// export class MojoDefinitionProvider implements DefinitionProvider {
//     public provideDefinition(
//         document: TextDocument,
//         position: Position,
//         _: CancellationToken): ProviderResult<Definition | LocationLink[]> {

//         const range = document.getWordRangeAtPosition(position)
//         const text = document.getText(range)

//         if (!text) {
//             return;
//         }

//         const content = document.getText();
//         const inputStream = CharStreams.fromString(content);
//         const lexer = new MojoLexer(inputStream);
//         const tokenStream = new CommonTokenStream(lexer);
//         const parser = new MojoParser(tokenStream);
//         const listener = new DefinitionListener();
//         parser.addParseListener(listener as ParseTreeListener);

//         parser.syntax();

//         const def = listener.definitions.find(d => d.text === text);

//         var result: Definition = {
//             uri: document.uri,
//             range: new Range(
//                 def.line - 1,
//                 def.charPositionInLine,
//                 def.line - 1,
//                 def.charPositionInLine + def.text.length
//             )
//         };

//         return result;
//     }
// }