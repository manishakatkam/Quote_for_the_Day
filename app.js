var arr=["You yourself, as much as anybody in the entire universe, deserve your love and affection " , "Until you value yourself, you won't value your time. Until you value your time, you will not do anything with it." , "A man cannot be comfortable without his own approval.","Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life, but define yourself.","Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.","Remember always that you not only have the right to be an individual, you have an obligation to be one.","If only you could sense how important you are to the lives of those you meet; how important you can be to people you may never even dream of. There is something of yourself that you leave at every meeting with another person.","Low self-esteem is like driving through life with your hand-break on.","What lies behind us and what lies before us are tiny matters compared to what lies within us.","When you recover or discover something that nourishes your soul and brings joy, care enough about yourself to make room for it in your life.","When you recover or discover something that nourishes your soul and brings joy, care enough about yourself to make room for it in your life.","Self-care is never a selfish act—it is simply good stewardship of the only gift I have, the gift I was put on earth to offer to others.","When you adopt the viewpoint that there is nothing that exists that is not part of you, that there is no one who exists who is not part of you, that any judgment you make is self-judgment, that any criticism you level is self-criticism, you will wisely extend to yourself an unconditional love that will be the light of the world.","Why should we worry about what others think of us, do we have more confidence in their opinions than we do our own?","To establish true self-esteem we must concentrate on our successes and forget about the failures and the negatives in our lives."];
document.querySelector('.button').addEventListener('click',function(){

    //1.random number
    var r=Math.floor(Math.random()*(arr.length));
    var quote=arr[r];
    console.log(quote);
    
    document.querySelector('.bottom').textContent='"'+quote+ '"'; 

    
    
});
