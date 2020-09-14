import React from 'react';

const UserOutput = props => {
  const userStyles = {
    fontSize: '1.6rem',
    fontColor: '#222',
    textAlign: 'center',
  }
  const pStyles = {
    fontSize: '0.75rem',
    fontColor: '#111',
    textAlign: 'justify',
    height: '50px',
    border: '1px solid #444',
    borderRadius: '0.5rem',
    'overflow-x': 'hidden',
    'overflow-y': 'scroll',
  }
  return (
    <>
      <p style={userStyles}>user: {props.userName}</p>
      <p style={pStyles}>
        Spicy jalapeno bacon ipsum dolor amet burgdoggen pork loin sunt meatball
        commodo incididunt chuck qui, dolor consectetur ad eu ipsum. Cupidatat
        chuck pork leberkas. Meatball prosciutto corned beef ham tri-tip.
        Consectetur short ribs duis, mollit chicken adipisicing strip steak
        porchetta sausage. Sausage turkey quis nostrud fugiat ham hock. Ea tail
        ut laboris salami.
      </p>
      <p style={pStyles}>
        {" "}
        Enim duis biltong cow culpa chuck tri-tip chislic strip steak jowl in
        laboris. Occaecat flank laborum, proident shankle strip steak ground
        round ut filet mignon consequat id ipsum kevin. Non landjaeger kielbasa
        tempor pastrami. Chicken tenderloin eiusmod turducken ribeye qui dolore
        cupim, duis ut. Shankle sint andouille meatball, ex do tenderloin salami
        pork loin doner bresaola labore. Ex nisi spare ribs ground round, tongue
        dolore flank ad meatloaf. Biltong drumstick pariatur buffalo quis beef
        ribs elit adipisicing labore leberkas id.
      </p>
    </>
  );
}

export default UserOutput;
