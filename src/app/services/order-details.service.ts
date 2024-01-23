import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Paneer Sandwich",
      foodDetails:"Pan-fried",
      foodPrice:200,
      // foodImg:"Photo by <a href="https://unsplash.com/@foodfaithfit?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Taylor Kiser</a> on <a href="https://unsplash.com/photos/cooked-meat-on-pan-POFG828-GQc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      // "
    },
    {
      id:2,
      foodName:"Paneer Sandwich",
      foodDetails:"Pan-fried",
      foodPrice:200,
      // foodImg:"Photo by <a href="https://unsplash.com/@foodfaithfit?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Taylor Kiser</a> on <a href="https://unsplash.com/photos/cooked-meat-on-pan-POFG828-GQc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      // "
    },
    {
      id:3,
      foodName:"Paneer Sandwich",
      foodDetails:"Pan-fried",
      foodPrice:200,
      // foodImg:"Photo by <a href="https://unsplash.com/@foodfaithfit?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Taylor Kiser</a> on <a href="https://unsplash.com/photos/cooked-meat-on-pan-POFG828-GQc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      // "
    },
    
  ]
}
