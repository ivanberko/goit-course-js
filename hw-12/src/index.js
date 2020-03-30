import './style.css';
import axios from 'axios';
import debounce from 'lodash.debounce';
import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/PNotifyBrightTheme.css';
import listCountriesTemp from './templatу/listCountries.hbs';
import itemCountriesTemp from './templatу/itemCountry.hbs';

PNotify.defaults.delay = 1000;

const listCountries = document.querySelector('.listCountries');
const itemCountry = document.querySelector('.country-box');
const input = document.querySelector('input');
const baseUrl = 'https://restcountries.eu/rest/v2/name/';

const clearContent = () => {
  listCountries.textContent = '';
  itemCountry.textContent = '';
};

const handelInput = (event) => {
  const inputValue = event.target.value;
  if (!inputValue) {
    return clearContent();
  }
  return axios
    .get(`${baseUrl}${inputValue}`)
    .then((res) => {
      if (res.data.length > 10) {
        clearContent();
        PNotify.error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
        return;
      }
      if (res.data.length === 1) {
        clearContent();
        itemCountry.insertAdjacentHTML(
          'beforeend',
          itemCountriesTemp(res.data[0]),
        );
        return;
      }
      clearContent();
      listCountries.insertAdjacentHTML(
        'beforeend',
        listCountriesTemp(res.data),
      );
    })
    .catch((err) => {
      console.log(err.response.data.message);
      PNotify.error({
        text: err.response.data.message,
      });
    });
};

input.addEventListener('input', debounce(handelInput, 500));
