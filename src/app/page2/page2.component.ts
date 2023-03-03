import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  constructor(private route: ActivatedRoute, private router: Router) { }
  onScroll(event: any)
  {
    if(event.wheelDeltaY < 0)
    {
      this.router.navigate(['/worry'], { relativeTo: this.route }); 
    }
    else if(event.wheelDeltaY > 0)
    {
      this.router.navigate(['/save'], { relativeTo: this.route }); 
    }    
  }
}
