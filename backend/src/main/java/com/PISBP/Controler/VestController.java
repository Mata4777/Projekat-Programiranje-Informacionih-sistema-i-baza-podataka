package com.PISBP.Controler;

import com.PISBP.dao.NewVest;
import com.PISBP.dao.VestBaseInfo;
import com.PISBP.service.VestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/vest")
public class VestController {

    private final VestService vestService;

    public VestController(VestService vestService) {
        this.vestService = vestService;
    }

    @GetMapping("/todays")
    public ResponseEntity<List<VestBaseInfo>> getTodays(){
        List<VestBaseInfo> vesti= vestService.getTodays();
        return ResponseEntity.ok().body(vesti);
    }

    @GetMapping("/all")
    public ResponseEntity<List<VestBaseInfo>> getAll(){
        List<VestBaseInfo> vesti= vestService.getAll();
        return ResponseEntity.ok(vesti);
    }

    @GetMapping("/my")
    public ResponseEntity<List<VestBaseInfo>> getMy(@RequestParam Integer userId){
        List<VestBaseInfo> vesti= vestService.getByUserId(userId);
        return ResponseEntity.ok(vesti);
    }

    @PostMapping("/new")
    public ResponseEntity<String> addVest(@RequestBody NewVest vest, Principal principal){
        vestService.saveVest(vest);
        return ResponseEntity.ok().body("success");
    }

}
