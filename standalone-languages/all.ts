/**
 * Copied off https://github.com/Microsoft/vscode/blob/d436ded577a95a9cc3d43f4ece8f848b524ce430/src/vs/editor/standalone-languages/all.ts
 * Which was the last vscode version to ship these languages built in
 */

'use strict';

let MonacoEditorLanguages: any[] = [];

// MonacoEditorLanguages.push({
// 	id: 'bat',
// 	extensions: [ '.bat', '.cmd'],
// 	aliases: [ 'Batch', 'bat' ],
// 	moduleId: 'vs/editor/standalone-languages/bat'
// });
MonacoEditorLanguages.push({
	id: 'coffeescript',
	extensions: [ '.coffee' ],
	aliases: [ 'CoffeeScript', 'coffeescript', 'coffee' ],
	mimetypes: ['text/x-coffeescript', 'text/coffeescript'],
	moduleId: 'vs/editor/standalone-languages/coffee'
});
MonacoEditorLanguages.push({
	id: 'c',
	extensions: [ '.c', '.h' ],
	aliases: [ 'C', 'c' ],
	moduleId: 'vs/editor/standalone-languages/cpp'
});
MonacoEditorLanguages.push({
	id: 'cpp',
	extensions: [ '.cpp', '.cc', '.cxx', '.hpp', '.hh', '.hxx' ],
	aliases: [ 'C++', 'Cpp', 'cpp'],
	moduleId: 'vs/editor/standalone-languages/cpp'
});
MonacoEditorLanguages.push({
	id: 'csharp',
	extensions: [ '.cs', '.csx' ],
	aliases: [ 'C#', 'csharp' ],
	moduleId: 'vs/editor/standalone-languages/csharp'
});
MonacoEditorLanguages.push({
	id: 'dockerfile',
	extensions: [ '.dockerfile' ],
	filenames: [ 'Dockerfile' ],
	aliases: [ 'Dockerfile' ],
	moduleId: 'vs/editor/standalone-languages/dockerfile'
});
MonacoEditorLanguages.push({
	id: 'fsharp',
	extensions: [ '.fs', '.fsi', '.ml', '.mli', '.fsx', '.fsscript' ],
	aliases: [ 'F#', 'FSharp', 'fsharp' ],
	moduleId: 'vs/editor/standalone-languages/fsharp'
});
MonacoEditorLanguages.push({
	id: 'go',
	extensions: [ '.go' ],
	aliases: [ 'Go' ],
	moduleId: 'vs/editor/standalone-languages/go'
});
MonacoEditorLanguages.push({
	id: 'ini',
	extensions: [ '.ini', '.properties', '.gitconfig' ],
	filenames: ['config', '.gitattributes', '.gitconfig', '.editorconfig'],
	aliases: [ 'Ini', 'ini' ],
	moduleId: 'vs/editor/standalone-languages/ini'
});
MonacoEditorLanguages.push({
	id: 'jade',
	extensions: [ '.jade', '.pug' ],
	aliases: [ 'Jade', 'jade' ],
	moduleId: 'vs/editor/standalone-languages/jade'
});
MonacoEditorLanguages.push({
	id: 'java',
	extensions: [ '.java', '.jav' ],
	aliases: [ 'Java', 'java' ],
	mimetypes: ['text/x-java-source', 'text/x-java'],
	moduleId: 'vs/editor/standalone-languages/java'
});
MonacoEditorLanguages.push({
	id: 'lua',
	extensions: [ '.lua' ],
	aliases: [ 'Lua', 'lua' ],
	moduleId: 'vs/editor/standalone-languages/lua'
});
MonacoEditorLanguages.push({
	id: 'objective-c',
	extensions: [ '.m' ],
	aliases: [ 'Objective-C'],
	moduleId: 'vs/editor/standalone-languages/objective-c'
});
MonacoEditorLanguages.push({
	id: 'powershell',
	extensions: [ '.ps1', '.psm1', '.psd1' ],
	aliases: [ 'PowerShell', 'powershell', 'ps', 'ps1' ],
	moduleId: 'vs/editor/standalone-languages/powershell'
});
MonacoEditorLanguages.push({
	id: 'python',
	extensions: [ '.py', '.rpy', '.pyw', '.cpy', '.gyp', '.gypi' ],
	aliases: [ 'Python', 'py' ],
	firstLine: '^#!/.*\\bpython[0-9.-]*\\b',
	moduleId: 'vs/editor/standalone-languages/python'
});
MonacoEditorLanguages.push({
	id: 'r',
	extensions: [ '.r', '.rhistory', '.rprofile', '.rt' ],
	aliases: [ 'R', 'r' ],
	moduleId: 'vs/editor/standalone-languages/r'
});
MonacoEditorLanguages.push({
	id: 'ruby',
	extensions: [ '.rb', '.rbx', '.rjs', '.gemspec', '.pp' ],
	filenames: [ 'rakefile' ],
	aliases: [ 'Ruby', 'rb' ],
	moduleId: 'vs/editor/standalone-languages/ruby'
});
MonacoEditorLanguages.push({
	id: 'swift',
	aliases: ['Swift','swift'],
	extensions: ['.swift'],
	mimetypes: ['text/swift'],
	moduleId: 'vs/editor/standalone-languages/swift'
});
MonacoEditorLanguages.push({
	id: 'sql',
	extensions: [ '.sql' ],
	aliases: [ 'SQL' ],
	moduleId: 'vs/editor/standalone-languages/sql'
});
MonacoEditorLanguages.push({
	id: 'vb',
	extensions: [ '.vb' ],
	aliases: [ 'Visual Basic', 'vb' ],
	moduleId: 'vs/editor/standalone-languages/vb'
});
MonacoEditorLanguages.push({
	id: 'xml',
	extensions: [ '.xml', '.dtd', '.ascx', '.csproj', '.config', '.wxi', '.wxl', '.wxs', '.xaml', '.svg', '.svgz' ],
	firstLine : '(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)',
	aliases: [ 'XML', 'xml' ],
	mimetypes: ['text/xml', 'application/xml', 'application/xaml+xml', 'application/xml-dtd'],
	moduleId: 'vs/editor/standalone-languages/xml'
});


import {ModesRegistry} from 'vs/editor/common/modes/modesRegistry';
function registerLanguage(def): void {
	ModesRegistry.registerCompatMode(def);
}

MonacoEditorLanguages.forEach(registerLanguage);
