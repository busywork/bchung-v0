import { useEffect, useState } from 'react';

/*
 * https://blog.openreplay.com/creating-a-table-of-content-widget-in-react
 */

type HeadingType = { id: string; text: string; level: number };

const useHeadings = () => {
  const [headings, setHeadings] = useState<HeadingType[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4'))
      .filter(element => element.id)
      .map(element => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1)),
      }));
    setHeadings(elements);
  }, []);

  return headings;
};

export default useHeadings;
