/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.3.1(undefined)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

(function() {
var __m = ["vs/editor/standalone-languages/csharp","require","exports"];
var __M = function(deps) {
  var result = [];
  for (var i = 0, len = deps.length; i < len; i++) {
    result[i] = __m[deps[i]];
  }
  return result;
};
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[0], __M([1,2]), function (require, exports) {
    'use strict';
    exports.conf = {
        wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        comments: {
            lineComment: '//',
            blockComment: ['/*', '*/'],
        },
        brackets: [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']],
        autoClosingPairs: [
            { open: '"', close: '"', notIn: ['string', 'comment'] },
            { open: '\'', close: '\'', notIn: ['string', 'comment'] },
            { open: '{', close: '}', notIn: ['string', 'comment'] },
            { open: '[', close: ']', notIn: ['string', 'comment'] },
            { open: '(', close: ')', notIn: ['string', 'comment'] },
        ]
    };
    exports.language = {
        defaultToken: '',
        tokenPostfix: '.cs',
        brackets: [
            { open: '{', close: '}', token: 'delimiter.curly' },
            { open: '[', close: ']', token: 'delimiter.square' },
            { open: '(', close: ')', token: 'delimiter.parenthesis' },
            { open: '<', close: '>', token: 'delimiter.angle' }
        ],
        keywords: [
            'extern', 'alias', 'using', 'bool', 'decimal', 'sbyte', 'byte', 'short',
            'ushort', 'int', 'uint', 'long', 'ulong', 'char', 'float', 'double',
            'object', 'dynamic', 'string', 'assembly', 'is', 'as', 'ref',
            'out', 'this', 'base', 'new', 'typeof', 'void', 'checked', 'unchecked',
            'default', 'delegate', 'var', 'const', 'if', 'else', 'switch', 'case',
            'while', 'do', 'for', 'foreach', 'in', 'break', 'continue', 'goto',
            'return', 'throw', 'try', 'catch', 'finally', 'lock', 'yield', 'from',
            'let', 'where', 'join', 'on', 'equals', 'into', 'orderby', 'ascending',
            'descending', 'select', 'group', 'by', 'namespace', 'partial', 'class',
            'field', 'event', 'method', 'param', 'property', 'public', 'protected',
            'internal', 'private', 'abstract', 'sealed', 'static', 'struct', 'readonly',
            'volatile', 'virtual', 'override', 'params', 'get', 'set', 'add', 'remove',
            'operator', 'true', 'false', 'implicit', 'explicit', 'interface', 'enum',
            'null', 'async', 'await', 'fixed', 'sizeof', 'stackalloc', 'unsafe', 'nameof',
            'when'
        ],
        namespaceFollows: [
            'namespace', 'using',
        ],
        parenFollows: [
            'if', 'for', 'while', 'switch', 'foreach', 'using', 'catch', 'when'
        ],
        operators: [
            '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',
            '+', '-', '*', '/', '%', '!', '~', '++', '--', '+=',
            '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>', '=>'
        ],
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        // escape sequences
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/\@?[a-zA-Z_]\w*/, { cases: {
                            '@namespaceFollows': { token: 'keyword.$0', next: '@namespace' },
                            '@keywords': { token: 'keyword.$0', next: '@qualified' },
                            '@default': { token: 'identifier', next: '@qualified' }
                        }
                    }],
                // whitespace
                { include: '@whitespace' },
                // delimiters and operators
                [/}/, { cases: {
                            '$S2==interpolatedstring': { token: 'string.quote', bracket: '@close', next: '@pop' },
                            '@default': '@brackets' } }],
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }],
                // literal string
                [/\@"/, { token: 'string.quote', bracket: '@open', next: '@litstring' }],
                // interpolated string
                [/\$"/, { token: 'string.quote', bracket: '@open', next: '@interpolatedstring' }],
                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],
                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],
                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid']
            ],
            qualified: [
                [/[a-zA-Z_][\w]*/, { cases: { '@keywords': { token: 'keyword.$0' },
                            '@default': 'identifier' }
                    }],
                [/\./, 'delimiter'],
                ['', '', '@pop'],
            ],
            namespace: [
                { include: '@whitespace' },
                [/[A-Z]\w*/, 'namespace'],
                [/[\.=]/, 'delimiter'],
                ['', '', '@pop'],
            ],
            comment: [
                [/[^\/*]+/, 'comment'],
                // [/\/\*/,    'comment', '@push' ],    // no nested comments :-(
                ['\\*/', 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            litstring: [
                [/[^"]+/, 'string'],
                [/""/, 'string.escape'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            interpolatedstring: [
                [/[^\\"{]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/{{/, 'string.escape'],
                [/}}/, 'string.escape'],
                [/{/, { token: 'string.quote', bracket: '@open', next: 'root.interpolatedstring' }],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            whitespace: [
                [/^[ \t\v\f]*#\w.*$/, 'namespace.cpp'],
                [/[ \t\v\f\r\n]+/, ''],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
        },
    };
});

}).call(this);
//# sourceMappingURL=csharp.js.map
