import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  constructor(private route: ActivatedRoute, private router: Router) { }
  onScroll(event: any)
  {
    if(event.wheelDeltaY < 0)
    {
      this.router.navigate(['/offer'], { relativeTo: this.route }); 
    }
    else if(event.wheelDeltaY > 0)
    {
      this.router.navigate(['/care'], { relativeTo: this.route }); 
    }    
  }
}
