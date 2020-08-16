import { nodeName } from "jquery";

export default function() {
  let prod_item = $('.collection-grid__item');

  const setCraftClass = () => {
    if(prod_item) {
      prod_item.each((index, element) => {
        let title = $(element).find('.prod-des h4');
        if(title.text().includes('craft') || title.text().includes('Craft')) {
          $(element).addClass('is-craft')
        }
      })
    }

    if($('.is-craft').length > 0) {
      $('.filter-parent').append(`
      <div class="filter">
        <div class="filter__el">
          <h4>Series Type:</h4>
        </div>
        <div class="filter__el">
          <ul class="filter__options">
            <li class="filter-secondary"><a href="#0">Standard Series</a></li>
            <li class="filter-secondary"><a href="#0">Craft Series</a></li>
          </ul>
        </div>
      </div>
      `)
    }
    $('.filter-secondary').on('click', event => filterCraftVsStandard(event))
  }

  const checkParams = () => {
    let windowParam = new URLSearchParams(window.location.search);
    console.log(windowParam.get('hi'))
  }


  const filterCraftVsStandard = (event) => {
    event.preventDefault();
    let value = $(event.currentTarget).text()
    if(value.includes("Craft")) {
      prod_item.show();
      prod_item.each((index, element) => {
        if(!$(element).hasClass('is-craft')) {
          $(element).hide();
        }
      })
    } else {
      prod_item.show();
      prod_item.each((index, element) => {
        if($(element).hasClass('is-craft')) {
          $(element).hide();
        }
      })
    }
  }


  

  checkParams();
  setCraftClass();
}