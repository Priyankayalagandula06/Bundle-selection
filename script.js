function toggleExpand(bundleId) {
    let bundle = document.getElementById(bundleId);
    let options = bundle.querySelector('.options-container');
  
    if (bundle.classList.contains('expanded')) {
      options.style.maxHeight = '0';
      options.style.opacity = '0';
      bundle.classList.remove('expanded');
    } else {
      document.querySelectorAll('.bundle-option').forEach(b => {
        b.classList.remove('expanded');
        b.querySelector('.options-container').style.maxHeight = '0';
        b.querySelector('.options-container').style.opacity = '0';
      });
      options.style.maxHeight = '300px';
      options.style.opacity = '1';
      bundle.classList.add('expanded');
    }
  }
  
  function selectBundle(bundleId) {
    document.querySelectorAll('.bundle-option').forEach(b => {
      b.classList.remove('selected');
      b.querySelector('input[type="radio"]').checked = false;
    });
  
    let bundle = document.getElementById(bundleId);
    bundle.classList.add('selected');
    bundle.querySelector('input[type="radio"]').checked = true;
  }
  