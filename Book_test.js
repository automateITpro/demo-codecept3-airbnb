Feature('Book');

Scenario('book apartment', ({ I }) => {
  I.amOnPage('https://airbnb.com');
  I.fillField('#bigsearch-query-detached-query', 'Vilnius')
  I.pressKey('Enter');
  I.click('[data-testid=datepicker-day-2020-10-09]')
  I.pressKey('Enter')
  I.pressKey('Enter')
  I.click('[data-testid=datepicker-day-2020-10-11]')
  I.pressKey('Enter')
  I.pressKey('Enter')
  I.click('Search')
  I.see('Studio Loft')
  I.see('Cozy apartment')
  I.see('Angel House')
});
