import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent implements OnInit {
  consentGiven = false; // Default to false, meaning cookies are not accepted initially

  constructor() { }

  ngOnInit(): void {
    // Check if user has already given consent by checking localStorage
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      this.consentGiven = true;
    }
  }

  // Accept Cookies
  acceptCookies(): void {
    this.consentGiven = true;
    localStorage.setItem('cookieConsent', 'true'); // Store consent in localStorage
  }

  // Reject Cookies
  rejectCookies(): void {
    this.consentGiven = false;
    localStorage.setItem('cookieConsent', 'false'); // Store rejection in localStorage
  }
}
