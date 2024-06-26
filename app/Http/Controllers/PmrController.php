<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notifications\MyNotification;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Pmr;
use App\Models\Amp;
use App\Models\Competitive;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class PmrController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::select('id as value', 'name as label')->get();
        $pmr_id = Pmr::select('id')->get();
        $getpmr = Pmr::all();

        $currentYear = date('Y').'-';
        $config = ['table' => 'pmr','field'=>'rfq_number', 'length' => 10, 'prefix'=>$currentYear.'-'];
        $id = IdGenerator::generate($config);
 
   
        return Inertia::render('Pmr',[
            'users' => $users,
            'latest_pmr_id' => $currentYear,
            'pmr' => $getpmr,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $userId = auth()->user()->id;

    

     
        $pmr = Pmr::create([
            'pr_number' => $request->input('pr_number'),
            'user_id' => $userId,
            'rfq_number' => $request->input('rfq_number'),
            'procurement_project' => $request->input('procurement'),
            'end_user' => $request->input('end_user'),
            'source_of_funds' => $request->input('source_of_funds'),
            'supplier' => $request->input('supplier'),
            'abc' => $request->input('abc'),
            'contract_amount' => $request->input('contract_amount'),
            'status' => $request->input('status'),
            'date' => $request->input('date'),
            'others' => $request->input('others'),
            
             

        ]);

      
        if($pmr){
            if(empty($request->input('pre_proc'))){

                $amp = Amp::create([
                'pmr_id' => $pmr->id,
                'pr_recieved' => $request->input('pr_recieved'),
                'rfq_for_posting' => $request->input('rfq_posting'),
                'pr_for_rfqs' => $request->input('pr_for_rfq'),
                'rfq_for_canvass' => $request->input('rfq_canvass'),
                'rfq_returned' => $request->input('rfq_returned'),
                'rfq_for_deliberation' => $request->input('rfq_deliberation'),
                'rfq_for_abstract' => $request->input('rfq_abstract'),
                'original_abstract' => $request->input('original_abstract'),
                'bac_resolution' => $request->input('bac_resolution'),
                'noa_contract_supply' => $request->input('noa'),
                'justification' => $request->input('justification'),
                'pr_supply' => $request->input('pr_supply'),
                'pr_end_user' => $request->input('pre_end'),
                'amp_others' => $request->input('amp_others'),
                ]);
              

            }
            else{
                $lastId = $pmr->id;
                $comp = Competitive::create([

                    'pmr_id' => $pmr->id,
                    'pre_proc_conf' => $request->input('pre_proc'),
                    'elligibilty_check' => $request->input('eligibility_check'),
                    'post_quality' => $request->input('post_quality'),
                    'contract_signing' => $request->input('contract_signing'),
                    'posting_on_philgeps' => $request->input('posting_philgeps'),
                    'notice_of_proceed' => $request->input('notice_of_proceed'),
                    'date_of_bac' => $request->input('date_of_bac'),
                    'opening_canvass' => $request->input('opening_canvass'),
                    'bid_eveluation' => $request->input('bid_evaluation'),
                    'pre_bid_conf' => $request->input('pre_bid'),
                    'notice_of_award' => $request->input('notice_of_awardd'),
                ]);
            }

            // return redirect()->back();

        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {        
        $getPmr = PMR::where('id', $id)->get();
        return Inertia::render('Admin/EditPmr',[
            'pmr'=> $getPmr
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $userId = auth()->user()->id;

    

     
        $pmr = Pmr::where('id', $id)->update([
            'pr_number' => $request->input('pr_number'),
            'user_id' => $userId,
            'rfq_number' => $request->input('rfq_number'),
            'procurement_project' => $request->input('procurement'),
            'end_user' => $request->input('end_user'),
            'source_of_funds' => $request->input('source_of_funds'),
            'supplier' => $request->input('supplier'),
            'abc' => $request->input('abc'),
            'contract_amount' => $request->input('contract_amount'),
            'status' => $request->input('status'),
            'date' => $request->input('date'),
            'others' => $request->input('others'),
        ]);

      
        if($pmr){
            if(empty($request->input('pre_proc'))){

                $amp = Amp::where('pmr_id', $id)->update([
                'pr_recieved' => $request->input('pr_recieved'),
                'rfq_for_posting' => $request->input('rfq_posting'),
                'pr_for_rfqs' => $request->input('pr_for_rfq'),
                'rfq_for_canvass' => $request->input('rfq_canvass'),
                'rfq_returned' => $request->input('rfq_returned'),
                'rfq_for_deliberation' => $request->input('rfq_deliberation'),
                'rfq_for_abstract' => $request->input('rfq_abstract'),
                'original_abstract' => $request->input('original_abstract'),
                'bac_resolution' => $request->input('bac_resolution'),
                'noa_contract_supply' => $request->input('noa'),
                'justification' => $request->input('justification'),
                'pr_supply' => $request->input('pr_supply'),
                'pr_end_user' => $request->input('pre_end'),
                'amp_others' => $request->input('amp_others'),

                ]);
              

            }
            else{
                $comp = Competitive::where('pmr_id', $id)->update([
                    'pre_proc_conf' => $request->input('pre_proc'),
                    'elligibilty_check' => $request->input('eligibility_check'),
                    'post_quality' => $request->input('post_quality'),
                    'contract_signing' => $request->input('contract_signing'),
                    'posting_on_philgeps' => $request->input('posting_philgeps'),
                    'notice_of_proceed' => $request->input('notice_of_proceed'),
                    'date_of_bac' => $request->input('date_of_bac'),
                    'opening_canvass' => $request->input('opening_canvass'),
                    'bid_eveluation' => $request->input('bid_evaluation'),
                    'pre_bid_conf' => $request->input('pre_bid'),
                    'notice_of_award' => $request->input('notice_of_awardd'),
                ]);
            }


        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
     
        $user=PMR::find($id);
        $user->delete(); 

        return redirect()->route('pmr');
    }
}
