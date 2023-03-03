import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  constructor(private route: ActivatedRoute, private router: Router) { }
  onScroll(event: any)
  {
    if(event.wheelDeltaY < 0)
    {
      this.router.navigate(['/care'], { relativeTo: this.route }); 
    }  
  }
}
