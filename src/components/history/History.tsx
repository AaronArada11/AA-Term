import React from 'react';
import { History as HistoryInterface } from './interface';
import { Ps1 } from '../Ps1';

export const History: React.FC<{ history: Array<HistoryInterface> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex min-w-0 flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="min-w-0 flex-grow break-words">{entry.command}</div>
          </div>

          <div
            className="terminal-output mb-2 min-w-0 whitespace-pre-wrap break-words"
            style={{ lineHeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;
