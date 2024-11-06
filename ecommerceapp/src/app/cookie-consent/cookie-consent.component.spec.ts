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
    // No need to check localStorage anymore.
    // This ensures the popup always shows.
  }

  // Accept Cookies
  acceptCookies(): void {
    this.consentGiven = true;
    // Optionally, you can still store the preference in localStorage if needed
    // localStorage.setItem('cookieConsent', 'true');
    this.hidePopup(); // Close the popup after accepting
  }

  // Reject Cookies
  rejectCookies(): void {
    this.consentGiven = false;
    // Optionally, store rejection in localStorage if you need it
    // localStorage.setItem('cookieConsent', 'false');
    this.hidePopup(); // Close the popup after rejecting
  }

  // Hide the popup (you can also apply additional logic here if needed)
  hidePopup() {
    const popup = document.querySelector('.cookie-popup') as HTMLElement;
    if (popup) {
      popup.style.display = 'none';
    }
  }
}
