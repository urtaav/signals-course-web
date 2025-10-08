import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';

interface Post { id: number; title: string; }


@Component({
  selector: 'app-interop-rx-resource',
  imports: [...fromComponents.components],
  templateUrl: './interop-rx-resource.html',
  styleUrl: './interop-rx-resource.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteropRxResource {
  readonly http: HttpClient = inject(HttpClient);

  readonly posts = rxResource<Post[],void>({
    stream: () => this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'),
    defaultValue:[]
  });
}
