import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  /* eslint-disable  @typescript-eslint/no-explicit-any */ //This is an exception but you can throw a rock at me
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      body: this.removeEmptyAttributes(request.body),
    });

    return next.handle(modifiedRequest);
  }

  private removeEmptyAttributes(requestBody: object): object {
    const body = { ...requestBody };

    return JSON.parse(
      JSON.stringify(body, (key: unknown, value: unknown) => {
        if (value === null || value === undefined || value === '') {
          return undefined;
        }

        return value;
      }),
    );
  }
}
