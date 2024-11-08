import { Component } from '@angular/core';
import GridListComponent from '../../components/grid-list/grid-list.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [GridListComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export default class ListProductsComponent {

}
