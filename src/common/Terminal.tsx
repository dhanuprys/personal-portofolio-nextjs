'use client'

import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

type Command = {
    command: string;
    description: string;
    processor: (command: string) => string;
};

type TerminalCommandHistoryProps = {
    signature: string;
    user: string;
    path: string;
    command: string;
    output: string;
};

function TerminalCommandHistory({ user, path, command, output }: TerminalCommandHistoryProps) {
    return (
        <div className="flex flex-col gap-2">
            <div>
                <span className="text-green-500">{user}:</span>
                <span className="text-blue-500 ml-2">{path}</span>
            </div>
            <div className="flex items-baseline gap-2">
                <div>
                    <FaArrowRight className="text-green-500 font-bold" />
                </div>
                <div className="flex-1 text-white">
                    {command}
                </div>
            </div>
            <div className="text-white">
                {output}
            </div>
        </div>
    );
}

function Terminal() {
    const [commandHistories, setHistory] = useState<TerminalCommandHistoryProps[]>([]);
    const terminalInputRef = useRef<HTMLDivElement>(null);
    const [terminalCommand, setTerminalCommand] = useState('');

    const processCommand = useCallback((inputCommand: string) => {
        const commandList: Command[] = [
            {
                command: 'help',
                description: 'Menampilkan help',
                processor: (command) => {
                    return 'anda memanggil command: ' + command;
                }
            },
            {
                command: 'clear',
                description: '',
                processor: () => {
                    setHistory([]);
                    return 'Terminal dibersihkan';
                }
            },
            {
                command: 'name',
                description: 'Menampilkan nama',
                processor: (command) => {
                    return 'Gede Dhanu Purnayasa';
                }
            }
        ];

        for (const commandProperty of commandList) {
            if (inputCommand !== commandProperty.command) continue;

            return commandProperty.processor(inputCommand);
        }

        return 'Perintah tidak ditemukan';
    }, []);

    const clearConsole = () => {
        if (!terminalInputRef.current) {
            return;
        }

        setTerminalCommand('');
        terminalInputRef.current.innerHTML = '';
    }

    const executeCommand = () => {
        const commandOutput = processCommand(terminalCommand);
        setHistory([
            ...commandHistories,
            {
                signature: String(new Date().getMilliseconds()),
                user: 'you@dhanu-portofolio',
                path: '/home/dhanu',
                command: terminalCommand,
                output: commandOutput
            }
        ]);
        clearConsole();
        // alert('execute');
    };
    const recordTerminal = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            // execute
            return executeCommand();
        }

        terminalInputRef.current && setTerminalCommand(terminalInputRef.current.innerHTML);
    };

    return (
        <div className="shadow-xl" onClick={() => terminalInputRef.current && terminalInputRef.current.focus()}>
            {/* HEADER */}
            <div className="grid grid-cols-12 px-2 py-1 bg-slate-900 text-slate-200 rounded-t">
                <div className="col-span-2 flex items-center gap-2">
                    <div className="size-2 lg:size-3 bg-red-500 rounded-full"></div>
                    <div className="size-2 lg:size-3 bg-yellow-500 rounded-full"></div>
                    <div className="size-2 lg:size-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm md:text-base col-span-8 flex justify-center">
                    dhanu-portofolio
                </div>
            </div>

            <div className="bg-slate-800 rounded-b text-sm min-h-[300px] max-h-[300px] overflow-auto px-2 flex-col gap-2">
                {
                    commandHistories && commandHistories.map((command) => {
                        return (
                            <TerminalCommandHistory key={command.signature} {...command} />
                        );
                    })
                }

                {/* ROW */}
                <div className="flex flex-col gap-2">
                    <div>
                        <span className="text-green-500">you@dhanu-portofolio:</span>
                        <span className="text-blue-500 ml-2">/home/dhanu</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <div>
                            <FaArrowRight className="text-green-500 font-bold" />
                        </div>
                        <div className="flex-1 text-white">
                            <div ref={terminalInputRef} contentEditable="true" onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()} onKeyUp={recordTerminal} className="break-all outline-none">
                                {/* blank */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;