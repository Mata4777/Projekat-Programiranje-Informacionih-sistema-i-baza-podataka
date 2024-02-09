package com.PISBP.Controler;


import com.PISBP.entity.Vest;
import com.PISBP.repository.KomentarRepository;
import com.PISBP.repository.VestReposotory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class HomeControler {
    private final KomentarRepository komentarRepository;
    private final VestReposotory vestReposotory;

    public HomeControler(KomentarRepository komentarRepository, VestReposotory vestReposotory) {
        this.komentarRepository = komentarRepository;
        this.vestReposotory = vestReposotory;
    }

    @GetMapping("/hello")
    public ResponseEntity<String> getHello(){
        List<Vest> all = vestReposotory.findAll();
        return ResponseEntity.status(200).body("asdf");

    }
}
