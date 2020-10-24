export default function() {

  let $form = $('.batch-search');
  let $input = $('.batch-search__item');

  const searchBatch = event => {
    event.preventDefault();
    let $searchQuery = $input.val();


    if($searchQuery.length <= 0) return;

    let $batch = `.batch-id-${$searchQuery}`;


    $('.batch__item').hide();

    if($($batch).length > 0) {
      setTimeout(() => $($batch).show())
    } else {
      $('.no-results').show();
      $('.batch-search-query').html($searchQuery)
    }
  }

  $form.on('submit', event => searchBatch(event));


  const showAllBatch = () => {
    $('.no-results').hide();
    $('.batch__item').show();
  }


  $('.reset-batch').on('click', showAllBatch);

}