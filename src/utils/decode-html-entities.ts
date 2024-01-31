import React from 'react';

export function renderHTML(rawHTML: string) {
  return React.createElement('div', {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
}
