import React, { useState } from 'react';

export default function Accordian() {
  const items = [
    {
      language: 'Hypertext Markup Language',
      description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
    },
    {
      language: 'Cascading Style Sheets',
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
    },
    {
      language: 'JavaScript',
      description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.'
    }
  ];

  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  function itemHandler(input) {

  }

  return (
    <div className='row'>
      {
        items.map((item) => (
          <div key={item.language} className="item">
            <h1 onClick={() => itemHandler(item.language)}>{item.language}</h1>
            <p className={item.language.split(' ').join('-').toLowerCase()}>{item.description}</p>
          </div>
        ))
      }
    </div>
  );
}
