import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewEncapsulation,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  //this will be an event for changin the value of an input, we will subscribe to this course changed event
  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    console.log("cards injection service: ", this.coursesService);
  }
  //   here we receive the description as string in this function
  onSaveClicked(description: string) {
    // here we get course and only change the description
    this.courseEmitter.emit({ ...this.course, description });
  }
}
