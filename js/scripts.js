var warningSignsResults = 0;
var healthResults = 0;
var copingResults = 0;
$(document).ready(function()
{
  $("form#stress-test").submit(function(event)
  {
    event.preventDefault();
    $("input:checkbox[name=warning-signs]:checked").each(function()
      {
          warningSignsResults += parseInt($(this).val());
      });

      $("input:checkbox[name=health]:checked").each(function()
        {
            healthResults += parseInt($(this).val());
        });
        $("input:checkbox[name=coping]:checked").each(function()
          {
              copingResults += parseInt($(this).val());
          });
        if (warningSignsResults+healthResults > copingResults)
        {
          $("#bad-results").show();
        }
        else {
          $("#good-results").show();
        }
  });
})
