
import { test, describe, it, before, after } from 'node:test';
import { randomcat } from  'randomcat' ;

test( 'get', ()=>{
  console.log( randomcat() );
});

