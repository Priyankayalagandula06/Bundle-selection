function toggleExpand(bundleId) {
    const bundles = document.querySelectorAll('.bundle-option');
    const clickedBundle = document.getElementById(bundleId);
    
    // If the bundle is already expanded, keep it that way
    if (clickedBundle.classList.contains('expanded')) {
      return;
    }
    
    // Collapse all bundles
    bundles.forEach(bundle => {
      bundle.classList.remove('expanded');
    });
    
    // Expand the clicked bundle
    clickedBundle.classList.add('expanded');
    
    // Select the radio button
    const radioButton = clickedBundle.querySelector('input[type="radio"]');
    radioButton.checked = true;
    
    // Update selected state for styling
    selectBundle(bundleId);
  }
  
  function selectBundle(bundleId) {
    const bundles = document.querySelectorAll('.bundle-option');
    
    // Remove selected class from all bundles
    bundles.forEach(bundle => {
      bundle.classList.remove('selected');
    });
    
    // Add selected class to clicked bundle
    const clickedBundle = document.getElementById(bundleId);
    clickedBundle.classList.add('selected');
    
    // Update total price based on selected bundle
    let totalPrice = "$29.99";
    if (bundleId === 'bundle2') {
      totalPrice = "$49.99";
    } else if (bundleId === 'bundle3') {
      totalPrice = "$69.99";
    }
    
    document.querySelector('.total').textContent = `Total: ${totalPrice}`;
    
    // Expand the bundle to show options
    clickedBundle.classList.add('expanded');
  }
  
  // Initialize with middle bundle selected
  window.onload = function() {
    selectBundle('bundle2');
    toggleExpand('bundle2');
  };
