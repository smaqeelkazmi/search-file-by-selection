// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "search-file-from-selection" is now active!');


	let searchSelectedFile = vscode.commands.registerCommand('extension.searchSelectedFile', () => {
	
		var editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}

		var selection = editor.selection;
		var text = editor.document.getText(selection);

		vscode.commands.executeCommand('workbench.action.quickOpen', text);

	});
	
	context.subscriptions.push(searchSelectedFile);
}

// this method is called when your extension is deactivated
export function deactivate() {}
