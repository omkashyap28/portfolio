import { Heading1, Main } from "../components";

export default function VScodeSetups() {
  return (
    <Main>
      <Heading1 heading="VS Code Setups" />
      <p className="text-neutral-700 font-semibold text-[16px] tracking-tight">VS Code extensions, settings and shortcuts i used in my daily life to make development more easier.</p>
      <div>
        <h4 className="text-xl text-neutral-700 mt-4 mb-2">
          Extensions
        </h4>
        <ul className="list-disc">
          <li className="ml-8">ES7 React/Redux/GraphQL/React-Native snippets</li>
          <li className="ml-8">ESLint</li>
          <li className="ml-8">Figma for VS Code</li>
          <li className="ml-8">GitHub Copilot Chat</li>
          <li className="ml-8">Import Cost</li>
          <li className="ml-8">JavaScript (ES6) code snippets</li>
          <li className="ml-8">Live Preview</li>
          <li className="ml-8">Material Icon Theme</li>
          <li className="ml-8">Prettier - Code formatter</li>
          <li className="ml-8">Tailwind CSS IntelliSense</li>
          <li className="ml-8">Pylance</li>
          <li className="ml-8">C/c++</li>
          <li className="ml-8">C/C++ Extension Pack</li>
          <li className="ml-8">Code Runner</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl text-neutral-700 mt-4 mb-2">
          Shortcuts
        </h4>
        <ul className="list-disc">
          <li className="ml-8"><kbd>Ctrl+Shift+P</kbd><span className="text-neutral-700"> : F1 Show Command Palette</span></li>
          <li className="ml-8"><kbd>Ctrl+P</kbd><span className="text-neutral-700"> : Quick Open, Go to File…</span></li>
          <li className="ml-8"><kbd>Ctrl+Shift+N</kbd><span className="text-neutral-700"> : New window/instance</span></li>
          <li className="ml-8"><kbd>Ctrl+Shift+W</kbd><span className="text-neutral-700"> : Close window/instance</span></li>
          <li className="ml-8"><kbd>Ctrl+,</kbd><span className="text-neutral-700"> : User Settings</span></li>
          <li className="ml-8"><kbd>Ctrl+K</kbd> <kbd>Ctrl+S</kbd><span className="text-neutral-700"> : Keyboard Shortcuts</span></li>
          <li className="ml-8"><kbd>Ctrl+X</kbd><span className="text-neutral-700"> : Cut line (empty selection)</span></li>
          <li className="ml-8"><kbd>Ctrl+C</kbd><span className="text-neutral-700"> : Copy line (empty selection)</span></li>
          <li className="ml-8"><kbd>Alt+↑</kbd> / <kbd>Alt+↓</kbd><span className="text-neutral-700"> : Move line up/down</span></li>
          <li className="ml-8"><kbd>Shift+Alt+↓</kbd> / <kbd>Shift+Alt+↑</kbd><span className="text-neutral-700"> : Copy line up/down</span></li>
          <li className="ml-8"><kbd>Ctrl+Shift+K</kbd><span className="text-neutral-700"> : Delete line</span></li>
          <li className="ml-8"><kbd>Ctrl+↑</kbd> / <kbd>Ctrl+↓</kbd><span className="text-neutral-700"> : Scroll line up/down</span></li>
          <li className="ml-8"><kbd>Alt+Z</kbd><span className="text-neutral-700"> : Toggle word wrap</span></li>
          <li className="ml-8"><kbd>Ctrl+F</kbd><span className="text-neutral-700"> : Find</span></li>
          <li className="ml-8"><kbd>Ctrl+H</kbd><span className="text-neutral-700"> : Replace</span></li>
          <li className="ml-8"><kbd>Alt+Click</kbd><span className="text-neutral-700"> : Insert cursor</span></li>
          <li className="ml-8"><kbd>Ctrl+U</kbd><span className="text-neutral-700"> : Undo last cursor operation</span></li>
          <li className="ml-8"><kbd>Ctrl+L</kbd><span className="text-neutral-700"> : Select current line</span></li>
          <li className="ml-8"><kbd>Ctrl+Space</kbd>, <kbd>Ctrl+I</kbd><span className="text-neutral-700"> : Trigger suggestion</span></li>
          <li className="ml-8"><kbd>Shift+Alt+F</kbd><span className="text-neutral-700"> : Format document</span></li>
          <li className="ml-8"><kbd>Ctrl+F4</kbd>, <kbd>Ctrl+W</kbd><span className="text-neutral-700"> : Close editor</span></li>
          <li className="ml-8"><kbd>Ctrl+K</kbd> <kbd>F</kbd><span className="text-neutral-700"> : Close folder</span></li>
          <li className="ml-8"><kbd>Ctrl+N</kbd><span className="text-neutral-700"> : New File</span></li>
          <li className="ml-8"><kbd>Ctrl+O</kbd><span className="text-neutral-700"> : Open File…</span></li>
          <li className="ml-8"><kbd>Ctrl+S</kbd><span className="text-neutral-700"> : Save</span></li>
          <li className="ml-8"><kbd>Ctrl+Shift+S</kbd><span className="text-neutral-700"> : Save As…</span></li>
          <li className="ml-8"><kbd>Ctrl+K</kbd> <kbd>S</kbd><span className="text-neutral-700"> : Save All</span></li>
          <li className="ml-8"><kbd>Ctrl+K</kbd> <kbd>Ctrl+W</kbd><span className="text-neutral-700"> : Close All</span></li>
          <li className="ml-8"><kbd>Ctrl+Shift+T</kbd><span className="text-neutral-700"> : Reopen closed editor</span></li>
          <li className="ml-8"><kbd>Ctrl+K</kbd> <kbd>P</kbd><span className="text-neutral-700"> : Copy path of active file</span></li>
          <li className="ml-8"><kbd>F11</kbd><span className="text-neutral-700"> : Toggle full screen</span></li>
          <li className="ml-8"><kbd>Ctrl+`</kbd><span className="text-neutral-700"> : Show integrated terminal</span></li>
          <li className="ml-8"><kbd>Ctrl+Shift+`</kbd><span className="text-neutral-700"> : Create new terminal</span></li>
        </ul>

      </div>
    </Main>
  )
}