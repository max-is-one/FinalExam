import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component {
  constructor(private route: ActivatedRoute, private router: Router) { }
  onScroll(event: any)
  {
    if(event.wheelDeltaY > 0)
    {
      this.router.navigate(['/offer'], { relativeTo: this.route }); 
    }    
  }
}
