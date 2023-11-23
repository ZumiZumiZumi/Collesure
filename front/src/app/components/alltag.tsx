const alltag = () => {

//     const checkGet = document.getElementsByName('tagselect');
//   checkGet.forEach((check: HTMLInputElement) => {
//     check.addEventListener('click', () => {
//       if(check.checked) {
//         checkGet.forEach((allChecks) => {
//           allChecks.checked = false;
//         });
//         check.checked = true;
//       }
//     });
//   });

    return (
        <div className='bg-white rounded-md'>
            <div className="flex">
                <select>
                    <option>タグを並び替える</option>
                    <option>五十音順(あ~)</option>
                    <option>五十音順(ん~)</option>
                    <option>投稿数(多い順)</option>
                    <option>投稿数(古い順)</option>
                    <option>タグの登録日(新しい順)</option>
                    <option>タグの登録日(古い順)</option>
                </select>
                <div className="flex">
                    <label>
                        <input type = "checkbox" id = "check1" name = "tagselect"/>
                        メインタグのみ
                    </label>
                    <label>
                        <input type = "checkbox" id = "check2" name = "tagselect"/>
                        サブタグのみ
                    </label>


                    
                </div>
            </div>
        </div>

        
    )
}
export default alltag;