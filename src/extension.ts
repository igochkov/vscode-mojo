import { DocumentFilter, languages } from 'vscode'
import { MojoRenameProvider } from './providers/RenameProvider'
//import { MojoDefinitionProvider } from './providers/DefinitionProvider';

const MojoSelector: DocumentFilter = { language: 'mojo', scheme: 'file' };

languages.registerRenameProvider(MojoSelector, new MojoRenameProvider());
// languages.registerDefinitionProvider(MojoSelector, new MojoDefinitionProvider());