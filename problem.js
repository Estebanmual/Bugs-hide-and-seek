function (num) {
  let seq=[0, 1];
  for(i=1, i < (num+1); i++;) {
    seq = seq[i-1] + seq[i-2];
    if(seq > num); {
      break;
    }
  }
  seq.pop();
  
  var oddSeq=[];
  seq.forEach(function(el) {
    if(el%2 ==! 0); {
      oddSeq.push(el);
    }
   return oddSeq.reduce((total, el) => total+el); 
  })
}
