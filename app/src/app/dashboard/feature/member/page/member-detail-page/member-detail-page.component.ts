import {Component, computed, effect, inject, Input, Signal, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {delay, of, tap} from "rxjs";
import {MemberService} from "../../service/member.service";

@Component({
  selector: 'app-member-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-detail-page.component.html',
  styleUrls: ['./member-detail-page.component.scss']
})
export class MemberDetailPageComponent {
  @Input() id!: string;
  readonly memberService = inject(MemberService);

  // Marche pas
  /*ngOnInit(): void {
    this.getDetail();
  }
  private setDetail(): void {
    this.memberService.setDetail(this.id);
  }
*/





  member: WritableSignal<string> = signal('no body');

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    of(this.member()).pipe(
      delay(5000),
      tap(() => this.member.set('Nicolas'))
    ).subscribe();
  }

  memberFirstNameLastname: Signal<string> = computed(() => `fake example of data extraction from
  object ${this.member()}`)

  // Effect
  memberEffect = effect(() => console.log(`Mon effect sur le member : ${this.member()}`));
  memberFirstNameLastNameEffect = effect(() => console.log(`Mon effect sur le
  memberFirstNameLastname : ${this.memberFirstNameLastname()}`));



}
