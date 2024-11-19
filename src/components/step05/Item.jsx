import React from 'react';

function Item({name , isPacked}) {
    // if (isPacked) {
    //     return <li>{name} ✅</li>;
    // } else{
    //     return null;
    //     // return <li>{name}</li>;
    // }
    // return(
    //     <li className='item'>
    //         {/* {isPacked ? name + '✅': null } */}

    //     </li>
    // );

    //&& 연산자
    // && 기준으로 왼쪽이 true 이면 오른쪽이 반환된다.
    // 참이면 ✅ 표시 거짓이면 표시하지 않음
    // return(
    //     <li>{name}{isPacked && '✅' }</li>
    // )
    let itemContent = name;
    if (isPacked) {
        itemContent = name + "✅";
    }
    return(
        <li>{itemContent}</li>
    );
}

export default Item;