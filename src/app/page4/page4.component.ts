import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {
  constructor(private route: ActivatedRoute, private router: Router) { }
  onScroll(event: any)
  {
    if(event.wheelDeltaY < 0)
    {
      this.router.navigate(['/invite'], { relativeTo: this.route }); 
    }
    else if(event.wheelDeltaY > 0)
    {
      this.router.navigate(['/worry'], { relativeTo: this.route }); 
    }    
  }
}
