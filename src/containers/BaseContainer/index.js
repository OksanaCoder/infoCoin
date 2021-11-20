import React from 'react';
import HeaderContainer from '@containers/HeaderContainer';

const BaseContainer = ({ children }) => {
  return (
    <>
      {/* <section>
        <article>
          <section>
            <div> */}
      <HeaderContainer />
      <section>{children}</section>
      {/* </div>
          </section>
        </article>
      </section> */}
    </>
  );
};

export default BaseContainer;
