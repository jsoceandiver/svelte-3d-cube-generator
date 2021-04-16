<style src="./Controls.css"></style>

<script>
    import store from '../../DAL/store';
    import { saveToStorage } from '../../DAL/storage-provider';

    /**
     * update for field
     * @param {string} field
     * @param {*} value
     */
    const updateFormField = (field, value) => {

        store.update(currentStore => {

            const updated = {
                ...currentStore,
                [field]: value
            }

            saveToStorage(updated);

            return updated;
        });
    };

    // $: console.log($store);
</script>

<form class="controls">

    <fieldset class="control">
        <legend>Rotation Types</legend>

        <div>
            <input
                    type="radio"
                    id="horizontal-rotation-radio"
                    value="y"
                    name="rotation-type"
                    bind:group={$store.rotationType}
                    on:change={evt => { updateFormField('rotationType', evt.target.value) }}
            />
            <label for="horizontal-rotation-radio">Horizontal Rotation</label>
        </div>

        <div>
            <input
                    type="radio"
                    id="vertical-rotation-radio"
                    value="x"
                    name="rotation-type"
                    bind:group={$store.rotationType}
                    on:change={evt => { updateFormField('rotationType', evt.target.value) }}
            />
            <label for="vertical-rotation-radio">Vertical Rotation</label>
        </div>

        <div>
            <input
                    type="radio"
                    id="z-rotation-radio"
                    value="z"
                    name="rotation-type"
                    bind:group={$store.rotationType}
                    on:change={evt => { updateFormField('rotationType', evt.target.value) }}
            />
            <label for="z-rotation-radio">Z-Rotation</label>
        </div>

        <div>
            <input
                    type="radio"
                    id="xy-rotation-radio"
                    value="xy"
                    name="rotation-type"
                    bind:group={$store.rotationType}
                    on:change={evt => { updateFormField('rotationType', evt.target.value) }}
            />
            <label for="xy-rotation-radio">XY-Rotation</label>
        </div>

        <div>
            <input
                    type="radio"
                    id="xyz-rotation-radio"
                    value="xyz"
                    name="rotation-type"
                    bind:group={$store.rotationType}
                    on:change={evt => { updateFormField('rotationType', evt.target.value) }}
            />
            <label for="xyz-rotation-radio">XYZ-Rotation</label>
        </div>

        <div>
            <input
                    type="radio"
                    id="combined-rotation-radio"
                    value="combined"
                    name="rotation-type"
                    bind:group={$store.rotationType}
                    on:change={evt => { updateFormField('rotationType', evt.target.value) }}
            />
            <label for="combined-rotation-radio">Combined Rotation</label>
        </div>
    </fieldset>

    <fieldset class="control">
        <legend>Easing</legend>

        <div>
            <input
                    type="radio"
                    id="linear-easing-radio"
                    value="linear"
                    name="easing-type"
                    bind:group={$store.easingType}
                    on:change={evt => { updateFormField('easingType', evt.target.value) }}
            />
            <label for="linear-easing-radio">Linear</label>
        </div>

        <div>
            <input
                    type="radio"
                    id="ease-easing-radio"
                    value="ease"
                    name="easing-type"
                    bind:group={$store.easingType}
                    on:change={evt => { updateFormField('easingType', evt.target.value) }}
            />
            <label for="ease-easing-radio">Ease</label>
        </div>

        <div>
            <input
                    type="radio"
                    id="ease-in-easing-radio"
                    value="ease-in"
                    name="easing-type"
                    bind:group={$store.easingType}
                    on:change={evt => { updateFormField('easingType', evt.target.value) }}
            />
            <label for="ease-in-easing-radio">Ease-In</label>
        </div>

        <div>
            <input
                    type="radio"
                    id="ease-in-out-easing-radio"
                    value="ease-in-out"
                    name="easing-type"
                    bind:group={$store.easingType}
                    on:change={evt => { updateFormField('easingType', evt.target.value) }}
            />
            <label for="ease-in-out-easing-radio">Ease-In-Out</label>
        </div>

    </fieldset>

   <div class="control">
         <label for="width-range">Width <small>({$store.width}px)</small></label>
         <input
                 type="range"
                 id="width-range"
                 min="100"
                 max="800"
                 value="{$store.width}"
                 on:input={evt => updateFormField('width', Number(evt.target.value) || 200) }
         />
     </div>

     <div class="control">
         <label for="height-range">Height <small>({$store.height}px)</small></label>
         <input
                 type="range"
                 id="height-range"
                 min="100"
                 max="800"
                 value="{$store.height}"
                 on:input={evt => updateFormField('height', Number(evt.target.value) || 200) }
         />
     </div>

     <div class="control">
         <label for="height-range">Depth <small>({$store.depth}px)</small></label>
         <input
                 type="range"
                 id="depth-range"
                 min="100"
                 max="800"
                 value="{$store.depth}"
                 on:input={evt => updateFormField('depth', Number(evt.target.value) || 200) }
         />
     </div>

     <div class="control">
         <label for="duration-range">Animation Duration  <small>({$store.duration}s)</small></label>
         <input
                 type="range"
                 id="duration-range"
                 min="0.1"
                 max="10"
                 step="0.1"
                 value="{$store.duration}"
                 on:input={evt => updateFormField('duration', Number(evt.target.value) || 4) }
         />
     </div>

    <div class="control">
       <label for="font-size-range">Font Size  <small>({$store.fontSize}rem)</small></label>
       <input
               type="range"
               id="font-size-range"
               min="0.5"
               max="5"
               step="0.5"
               value="{$store.fontSize}"
               on:input={evt => updateFormField('fontSize', Number(evt.target.value) || 1.5) }
       />
   </div>

   <hr class="control-line" />

   <div class="control">
       <label for="front-text-tb-tb">Front Text</label>
       <input type="text" id="front-text-tb-tb" value="{$store.frontFaceText}" on:input={evt => updateFormField('frontFaceText', evt.target.value) } />
   </div>

   <div class="control">
       <label for="back-text-tb">Back Text</label>
       <input type="text" id="back-text-tb" value="{$store.backFaceText}" on:input={evt => updateFormField('backFaceText', evt.target.value) } />
   </div>

   <div class="control">
       <label for="left-text-tb-tb">Left Text</label>
       <input type="text" id="left-text-tb-tb" value="{$store.leftFaceText}" on:input={evt => updateFormField('leftFaceText', evt.target.value) } />
   </div>

   <div class="control">
       <label for="right-text-tb">Right Text</label>
       <input type="text" id="right-text-tb" value="{$store.rightFaceText}" on:input={evt => updateFormField('rightFaceText', evt.target.value) } />
   </div>

   <div class="control">
       <label for="top-text-tb-tb">Top Text</label>
       <input type="text" id="top-text-tb-tb" value="{$store.topFaceText}" on:input={evt => updateFormField('topFaceText', evt.target.value) } />
   </div>

   <div class="control">
       <label for="bottom-text-tb">Bottom Text</label>
       <input type="text" id="bottom-text-tb" value="{$store.bottomFaceText}" on:input={evt => updateFormField('bottomFaceText', evt.target.value) } />
   </div>

   <hr class="control-line" />

    <div class="control one-row">
        <input type="color" id="front-face-bg-color-tb" value={$store.frontFaceBgColor} on:input={evt => updateFormField('frontFaceBgColor', evt.target.value) } />
        <label for="front-face-bg-color-tb">Front Face BG Color</label>
    </div>

    <div class="control one-row">
        <input type="color" id="back-face-bg-color-tb" value={$store.backFaceBgColor} on:input={evt => updateFormField('backFaceBgColor', evt.target.value) } />
        <label for="back-face-bg-color-tb">Back Face BG Color</label>
    </div>

    <div class="control one-row">
        <input type="color" id="left-face-bg-color-tb" value={$store.leftFaceBgColor} on:input={evt => updateFormField('leftFaceBgColor', evt.target.value) } />
        <label for="left-face-bg-color-tb">Left Face BG Color</label>
    </div>

    <div class="control one-row">
        <input type="color" id="right-face-bg-color-tb" value={$store.rightFaceBgColor} on:input={evt => updateFormField('rightFaceBgColor', evt.target.value) } />
        <label for="right-face-bg-color-tb">Right Face BG Color</label>
    </div>

    <div class="control one-row">
        <input type="color" id="top-face-bg-color-tb" value={$store.topFaceBgColor} on:input={evt => updateFormField('topFaceBgColor', evt.target.value) } />
        <label for="top-face-bg-color-tb">Top Face BG Color</label>
    </div>

    <div class="control one-row">
        <input type="color" id="bottom-face-bg-color-tb" value={$store.bottomFaceBgColor} on:input={evt => updateFormField('bottomFaceBgColor', evt.target.value) } />
        <label for="bottom-face-bg-color-tb">Bottom Face BG Color</label>
    </div>

</form>



