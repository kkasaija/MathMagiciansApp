import React from 'react';
import '../css/Quote.css';

class Quotes extends React.PureComponent {
  render() {
    return (
      <>
        <main className="quotesParagraph">
          <p className="paragraphQuote">
            Without mathematics, there’s nothing you can do. Everything around you is mathematics.
            Everything around you is numbers.
            — Shakuntala Devi, Indian writer and mental calculator
          </p>
        </main>
      </>
    );
  }
}

export default Quotes;
